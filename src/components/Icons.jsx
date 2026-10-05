export function WhatsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ico">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.8.1.2 1.9 2.9 4.6 4.1 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}
export function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ico"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
  );
}
export function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ico"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" /></svg>
  );
}
/* Coluna clássica do emblema, usada nos painéis sem foto. */
export function Column() {
  return (
    <svg viewBox="0 0 64 80" aria-hidden="true" className="column" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M8 10h48M8 70h48" />
      <path d="M14 10c-6 0-6 9 0 9M50 10c6 0 6 9 0 9M14 70c-6 0-6-9 0-9M50 70c6 0 6-9 0-9" />
      <path d="M22 19v42M29 19v42M35 19v42M42 19v42" />
    </svg>
  );
}
