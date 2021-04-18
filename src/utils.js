
function checkExt(fileStr){
    let allowedExt = ['jpg','jpg','png']
    let idxDot = fileStr.lastIndexOf('.');
    console.log("index last dot is",idxDot);
    let ext = fileStr.substr(idxDot+1,fileStr.length).toLowerCase();
    return allowedExt.includes(ext);

}

export default checkExt;