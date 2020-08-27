const Logo = () => (
    <>
        <img src="/logo.png" width={150} className="p-2 hidden md:inline-block" />
        <img src="/codar.png" width={50} className="p-2 md:hidden" />
    </>
)

const Menu = () => (
    <div className="p-2 flex items-center">
        <a href="http://github.com/codarme" target="_blank">
            Github
        </a>
        <a href="http://instagram.com/codar.me" target="_blank">
            Instagram
        </a>
        <a href="http://youtube.com/codarme" target="_blank">
            Youtube
        </a>
    </div>
)

const Header = () => (
    <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
        <Logo />
        <Menu />
    </div>
)

export default Header