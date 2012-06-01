module DOMMunger {
    // parameterized by a DOM implementation
    export function make(domAPI) {
        return {
            munge: function(doc) {
                
                domAPI.alert('hi!');
                
            }
        };
    }
}


module DOM {
  export function alert(msg){ 
    console.log(msg); 
  }
}


