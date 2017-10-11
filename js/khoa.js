var myBar = document.getElementById('navigation-bar');
console.log(myBar);

function renderNavBar() {
    return `    <nav class="navbar navbar-default navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">         
        <button class="navbar-toggle" type="button"  data-target=".navbar-collapse" data-toggle="collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
            <li >
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="profile.html">Profile</a>
            </li>
        </ul>
        <form action="" class="navbar-form navbar-left" role="search">
            <div class="formgroup">
                <input type="text" class="form-control" placeholder="Search">
                <button type="submit" class="btn btn-default"><a href="searchResult.html" style="color: grey; text-decoration:none;">Submit</a></button>
            </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
            <li >
                <a href="#">Subscribe</a>
            </li>
        </ul>
    </div>
 </div>
</nav>`;
}
const navHtml = renderNavBar();
myBar.innerHTML = navHtml;