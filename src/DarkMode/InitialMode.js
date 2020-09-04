import storage from "local-storage-fallback";

export function getInitialMode(){
  const isReturningUser = "dark" in localStorage;
  const savedMode = JSON.parse(storage.getItem('dark'));
  const userPrefer = getPrefColorScheme();

  if(isReturningUser){
    return savedMode;

  }else if(userPrefer){
    return true;
  }else{
    return false;
  }

}  
function getPrefColorScheme(){
  if(!window.matchMedia) return;
}