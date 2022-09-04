const letras = ['a', 'e', 'i', 'o', 'u'];
const chaves = ['ai', 'enter', 'imes', 'ober', 'ufat'];
function copiar()
{
    texto = document.querySelector(".resultado").textContent;
    console.log(texto);
    if(texto == "")
        alert("Não tem texto para ser copiado!");
    else
    {
        navigator.clipboard.writeText(texto);
        alert("Texto copiado!");
    }
}
function criptografar()
{
    texto= Array.from(document.getElementById("texto").value);
    for(x = 0; x<texto.length;x++)
        for(i = 0; i<letras.length;i++)
        {
            if(texto[x]==letras[i])
                texto[x]=chaves[i];
        }
       
    texto = texto.join('');
    res = document.querySelector(".resultado").textContent= texto;;
    aparece();
    document.getElementById("texto").value = "";
}
function descriptografar()
{
    texto = document.getElementById("texto").value;
    for(x = 0; x<chaves.length;x++)
    {
        while(texto.indexOf(chaves[x])!=-1)
            texto= texto.replace(chaves[x],letras[x]);
    }
    document.querySelector(".resultado").textContent = texto;
    document.getElementById("texto").value = "";
    aparece();
}
function aparece()
{
    if(document.querySelector(".resultado").textContent != '')
        document.querySelector(".divresultado").style.visibility = 'visible';
    else
    document.querySelector(".divresultado").style.visibility = 'hidden';
}