const DarkModeButton = (props) => {
    const toggleMode = e => {
      e.preventDefault();
      props.setDarkMode(!props.darkMode);
    };
    return (
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={props.darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
    );
  };
  
  export default DarkModeButton;