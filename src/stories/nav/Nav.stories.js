import Nav from "./Nav";

export default {
    title: 'TrungCreate/Nav',
    component: Nav,
    tags: ['autodocs'],  //có cái này thì sẽ tự động gen ra tab Docs
}

export const NavbarSmallRed = {
    //define các props của component
    args: {
        text: "Nav Small and Red",
        color: "red",
        size: 14
    }
}


export const NavbarDefault = {
     //define các props của component
    args: {
    }
}

export const NavbarGreen = {
    //define các props của component
   args: {
    color: "green",
    text: "Text with Green color"
   }
}