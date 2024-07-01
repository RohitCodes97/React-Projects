function customRender(reactElement, container){
    /*
    *Easy approach for better understanding
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    container.appendChild(domElement); 
    */

   /* Efficient Code Approach*/
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;
   for(const prop in reactElement.props){
    domElement.setAttribute(prop, reactElement.props[prop]);
   }
   container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props:{
        href: "https://netflix.com",
        target:'_blank'
    },
    children: "Click me to visit Netflix"
}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);