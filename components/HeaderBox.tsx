const HeaderBox = ({ type = 'Bem Vindo', title, subtext, user} : HeaderBoxProps) => {
    return (
        <div className='header-box'>
            <h1 className='header-box-title'>
                {title}
                {type === 'Bem Vindo' && (
                    <span className="text-bankGradient">
                        &nbsp;{user}
                    </span>
                )}
            </h1>
            <p className='header-box-subtext'>{subtext}</p>
        </div>
    )
}

export default HeaderBox