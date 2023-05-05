let l1;
let l2;
let frase;

l1 = prompt("Ingrese el primer caracter", ' ');
l2 = prompt("Ingrese el virus", ' ');

frase = prompt("Ingrese la frase",' ');

document.write(DesinfectarArchivo(l1, l2, frase));

function DesinfectarArchivo(l1, l2, frase)
{
    for(let i=0; i<frase.length; i++)
    {
        if((frase.charAt(i) && frase.charAt(i+2)) == l1)
        {
            if(frase.charAt(i+1) == l2)
            {
                frase = frase.split('');
                frase[i+1] = "";
                frase = frase.join("");
            }
        }
    }
    
  return frase;
}