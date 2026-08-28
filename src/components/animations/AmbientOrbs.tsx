export function AmbientOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[2]"
      style={{ overflow: "hidden" }}
    >
      <div
        className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(46,134,171,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(192,57,43,0.14), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[34rem] h-[34rem] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(27,79,114,0.16), transparent 70%)",
        }}
      />
    </div>
  );
}
