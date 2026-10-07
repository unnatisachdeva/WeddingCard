/**
 * A row of small hanging scallops, like the edge of a toran, that carries
 * the previous section's colour into the next one.
 */
export function ScallopEdge({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-10 h-3.5"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 0, ${color} 9px, transparent 9.5px)`,
        backgroundSize: "24px 14px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center top",
      }}
    />
  );
}
