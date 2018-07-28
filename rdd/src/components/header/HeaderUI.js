export class HeaderUI {


render(parentElement) {
const markup = `
<header class="header">
<a href="/" >
        <img src ="/img/rddlogo.svg" alt="RDD logo" class="logo"/>
</a>

<div class="navigation">
            <nav class="navigation__nav">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="/" class="navigation__link">Home</a></li>
                    <li class="navigation__item"><a href="#footer" class="navigation__link">Contact us</a></li>
                    </ul>
            </nav>
            </div>

                                
            <div class="shopping__cart">
                <a class="shopping__cart__cart navigation__link" href="#">Cart</a>
                <div class="shop__qun">
                    <span>03</span>
                </div>
            </div>

</header>
`


parentElement.insertAdjacentHTML('afterbegin', markup);

}

renderNav(parentElement){


}

}