// import { API_URL } from "../env";

import { API_URL } from "../constants/env";

function App() {

  return (
    <div>
      <form>
        <h1>helldgfho world {API_URL}</h1>
        <p>ESTE ES MI SITIO EN DESARROLLO!!!</p>
        <input type="text" defaultValue="esxribe@" required/>
        <select name="country" id="country" defaultValue="" required>
          <option value="">----</option>
          <option value="bo">bolivai</option>
          <option value="pe">peru</option>
          <option value="co">colmbia</option>
        </select>
        <button>sdfs</button>
      </form>
    </div>
  );
}

export default App
