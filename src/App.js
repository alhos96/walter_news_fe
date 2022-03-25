import { useState } from "react";

import { Header, Main } from "./components";
import Spinner from "./components/spinner/Spinner";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App relative">
      <Header />

      {loading ? <Spinner /> : <Main />}
    </div>
  );
}

export default App;
