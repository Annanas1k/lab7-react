export const  Header = () => {
  return (
    <header className="border-bottom py-3 mb-4">
      <div className="container" style={{ maxWidth: "1100px" }}>
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: "1.8rem" }}>🚗</span>
          <div>
            <h5 className="mb-0 fw-bold">AutoElite</h5>
            <small className="text-muted">Configurator</small>
          </div>
        </div>
      </div>
    </header>
  );
}