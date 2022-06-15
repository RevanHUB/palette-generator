import React, { useState } from 'react';
import Swal from 'sweetalert2'


function paletteGenerator() {
    let colors = []
    let characters = '0123456789ABCDEF';
    var color = '#';
    for (var x = 0; x < 5; x++) {
        for (var i = 0; i < 6; i++) {
            color += characters[Math.floor(Math.random() * 16)];
        }
        colors.push(color);
        var color = '#';
    }
    return colors;
 }


 const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    letterSpacing: '-1px',
    height:'60px'
 }
 const titleText = {
    fontSize: '2rem',
    fontWeight: 'bolder',
    margin: '0',
    color: '#0066FF',
    marginLeft: '20px',
    letterSpacing: '-3px',
    textTransform:'uppercase'
 } 
 const buttonStyle = {
    backgroundColor: '#0066FF',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 'lighter',
    textDecoration: 'none', 
    fontFamily: 'Calibri'

 }
 const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem',
    height: '60px',
    boxShadow: 'rgba(27, 31, 35, 0.15) 0px 0px 2px 1px',
 }
 const instruction = {
    marginLeft: '20px',
    color: 'gray',
    fontWeight: 'lighter',
    fontSize: '1.1rem', 
    fontFamily: 'Calibri'
 }
 const buttonsNav = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    background: '#ffffff',
    border: '0px',
    fontSize: '1.4rem',
    borderRadius: '5px'
 }
 const mainContainer = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    background: '#f2f2f2',
    width: '100%',
    height: '87.5vh'
 }

 const menu = {
    background: '#f2f2f2',
    width: '25%',
    height: '100%',
    display: 'none',
    boxShadow: 'rgba(27, 31, 35, 0.15) 0px 0px 2px 1px',
    transition:'.5s'
 }
 const paletteButton = {
    height: '60%',
    background: 'transparent',
    width: '100%',
    border: '0px',
    fontSize: '2rem',
    textTransform: 'uppercase',
    cursor: 'pointer'

 }
 const paletteSub = {
    fontSize: '.9rem',
    color: 'gray',
    textTransform: 'Capitalize',
    fontWeight: 'lighter', 
    fontFamily: 'Calibri'
 }

 
 export function Main() { 
    const [hidden, setHidden] = useState(true);
    const [refresh, setRefresh] = useState(0)
    return(
    <div>
        <header style={headerStyle}>
            <h1 style={titleText}> Cooloops</h1>
            <a href="http://david-martin-webdev.com" style={buttonStyle} >Go back</a>
        </header>
        <nav style={navStyle}>
            <p style={instruction}> Press the space bar to generate color palettes! </p>
            <button id="menuButton" className="navButton" style={buttonsNav} onClick={() => setHidden(s => !s)}  > ↻ </button>
        </nav>
        <main style={mainContainer}>
        {
            paletteGenerator().map((color) => <div className = "palette" style={{backgroundColor: color}} ><button key={color} style={paletteButton} onClick={() => {
                navigator.clipboard.writeText(color)
                Swal.fire(
                    { title: 'Copied!',
                    text: 'Color copied to clipboard',
                    icon: 'success',
                    confirmButtonText: 'Cool!', 
                    entryAnimation: 'slideUp',
                    showConfirmButton: true,
                    confirmButtonColor: '#0066FF',
                    fontFamily: 'Calibri'

                }
                ) 
                }
        }> 
        {
            color.slice(1,10)} <p style={paletteSub}> Copy </p> </button></div> )
        }
         {hidden ? <div key="menu" id="menuCont" style={menu}></div> : null}
            { 
             document.addEventListener('keyup', event => {
                    if (event.code === 'Space') {
                        window.location.assign(window.location)
                    } 
            })
        }
        </main>
    </div>
 )
}
 
 export default Main;

 