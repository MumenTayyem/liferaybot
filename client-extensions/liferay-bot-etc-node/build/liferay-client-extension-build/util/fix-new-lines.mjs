export default function fixNewLines(string){
    while (string.indexOf("\\n") !== -1){
        string = string.replace("\\n","\n");
    }
    return string;
}