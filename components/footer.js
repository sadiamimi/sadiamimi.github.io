class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© 2024 Sadia Afrose </p>
                    <p class="my-0 pt-0"><a class="" href="mailto:sadia.afrose1927@gmail.com">sadia.afrose1927@gmail.com</a></p>

                </div>


                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);"></p>
                    <p class="my-0 pt-0">
                        <a href=""><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="https://www.linkedin.com/in/sadia-afrose-a8a1b11b4" target="_blank"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true" style="color: var(--blue-medium)"></i></a>
                        <a href="https://github.com/sadiamimi" target="_blank"><i class="mr-3 fab footer-icons fa-github" aria-hidden="true" style="color: black"></i></a>
                    </p>
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component', Footer);
