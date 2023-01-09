const modeBtn = document.getElementById('mode-btn')
const container = document.getElementById('container-two')

modeBtn.addEventListener('click',modeChange)

function modeChange()
{
    //console.log(themeBtn.name)

     if(modeBtn.name === "light")
     {
       
    
                           modeBtn.name = "dark"
        
        document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/002/099/710/non_2x/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg')"

     }

     else
     {
    
                           modeBtn.name = "light"

       document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/002/099/700/non_2x/mountain-beautiful-landscape-background-design-illustration-free-vector.jpg')"

     }
}