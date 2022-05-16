import React from "react";

// const styles = {
//     footer: {
//         width: '100%', backgroundColor:'wheat'

//     },
// }


function Footer () {
    const isLoggedIn = true;
    const bgColor = (isLoggedIn)? 'wheat' : 'red';
    return (
        <footer style={styles.footer}
         className="footer">
            <p>
                &copy;Boca Code 2022</p>
        </footer>
    )
}

const styles = {
    footer: {
        width: '100%', backgroundColor: 'wheat',
    },
}


export default Footer