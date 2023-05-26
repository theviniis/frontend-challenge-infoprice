import './css/styles.css'

function App() {
  return (
    <div id="w">
      <div>
        <h1>Test frontend - InfoPrice</h1>
        <p>
          Enter a single Github username below and click the button to display
          profile info.
        </p>

        <input type="text" id="ghusername" placeholder="Github username..." />
        <a href="#" id="ghsubmitbtn">
          Search
        </a>

        <div id="ghapidata" className="clearfix"></div>
      </div>

      <h2>No User Info Found</h2>

      <div>
        <h2>
          USUARIO_NOME
          <span className="smallname">
            (@
            <a href="USUARIO_URL_PERFIL" target="_blank">
              USUARIO_LOGIN
            </a>
            )
          </span>
        </h2>

        <div className="ghcontent">
          <div className="avi">
            <a href="USUARIO_URL_PERFIL" target="_blank">
              <img
                src="USUARIO_PERFIL_FOTO_URL"
                width="80"
                height="80"
                alt="USUARIO_LOGIN"
              />
            </a>
          </div>
          <p>
            Followers: USUARIO_FOLLOWERS - Following: USUARIO_FOLLOWINGS
            <br />
            Repos: USUARIO_QUANTIDADE_REPOSITORIOS
          </p>
        </div>

        <div className="repolist clearfix">
          <p>No repos!</p>

          <div>
            <p>
              <strong>Repos List:</strong>
            </p>
            <ul>
              <li>
                <a href="USUARIO_REPOSITORIO_URL" target="_blank">
                  USUARIO_REPOSITORIO_NOME
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
