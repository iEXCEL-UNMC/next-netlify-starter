import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar w/ text</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
      <main>
      <div class="section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <div class="d-flex flex-column  p-3 justify-content-center align-items-center align-self-center"> <a class="navbar-brand" href="#">
              <b> BRAND</b>
            </a> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar11" style="">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex flex-column" id="navbar11">
              <ul class="navbar-nav flex-column">
                <li class="nav-item"> <a class="nav-link" href="#">Features</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">Pricing</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">Product</a> </li>
              </ul>
              <ul class="navbar-nav flex-column">
                <li class="nav-item"> <a class="nav-link" href="#">Services</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">About</a> </li>
                <li class="nav-item"> <a class="nav-link" href="#">FAQ</a> </li>
              </ul> <a class="btn navbar-btn  btn-secondary text-light">Contact us</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h1 class="display-4">Display 4</h1>
        </div>
        <div class="col-md-4">
          <h1 class="display-4">Display 4</h1>
        </div>
      </div>
    </div>
  </div>
        <Header title="Next.js Bootstrap" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
