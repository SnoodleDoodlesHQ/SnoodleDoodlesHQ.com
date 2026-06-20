const allowedUrlPattern = /^(https?:\/\/|mailto:|\/|#)/i;

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function escapeAttribute(value: string): string {
  return escapeHtml(value).replaceAll('`', '&#96;');
}

function renderMarkdownLinks(value: string): string {
  return value.replace(/\[([^\]\n]+)\]\(([^\s)]+)\)/g, (_match, label: string, url: string) => {
    const cleanUrl = String(url).trim();

    if (!allowedUrlPattern.test(cleanUrl)) {
      return escapeHtml(label);
    }

    const href = escapeAttribute(cleanUrl);
    const text = escapeHtml(label);
    const isExternal = /^https?:\/\//i.test(cleanUrl);

    if (isExternal) {
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }

    return `<a href="${href}">${text}</a>`;
  });
}

export function renderInlineMarkdown(value = ''): string {
  const escaped = escapeHtml(value.trim());

  return renderMarkdownLinks(escaped)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/_([^_]+)_/g, '<em>$1</em>')
    .replace(/\n{2,}/g, '</p><p>')
    .replace(/\n/g, '<br />');
}
