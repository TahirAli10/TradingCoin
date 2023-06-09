import React from "react";

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        data-sticky="top"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <a className="navbar-brand fade-page">
            <h5>
              <span>SLURPS</span>.<span>WORLD</span>
            </h5>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              className="icon"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V17C21 16.4477 20.5523 16 20 16H4C3.44772 16 3 16.4477 3 17V17ZM3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12V12C21 11.4477 20.5523 11 20 11H4C3.44772 11 3 11.4477 3 12V12ZM4 6C3.44772 6 3 6.44772 3 7V7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7V7C21 6.44772 20.5523 6 20 6H4Z"
                fill="#212529"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <div className="py-2 py-lg-0">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" rel="noopener">
                    Parachains
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" rel="noopener">
                    Auctions
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Guide
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Claim KSM
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item nav-item--social">
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="nav-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 24 24"
                      className="icon undefined"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>Twitter icon</title>
                      <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item nav-item--social">
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="nav-link"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon undefined"
                    >
                      <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item nav-item--social">
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="nav-link"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 32.58 31.77"
                      className="icon undefined"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>GitHub icon</title>
                      <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.82.15,1.11-.36,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3,6.3,0,0,1,1.67-4.37,5.94,5.94,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67A5.91,5.91,0,0,1,25,11.07a6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item nav-item--social">
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="btn  ml-lg-3 startButton"
                    style={{ color: "#39FF14", border: "3px solid #39FF14" }}
                  >
                    Start Building
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
