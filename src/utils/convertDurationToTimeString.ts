export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600)
    const minutes = Math.floor((duration % 3600) / 60);
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds] 
        .map(unit => String(unit).padStart(2, "0")) // Isso vai forçar que tanto a hora, minutos ou segundos tenha dois números, caso tenha só um número o 0 será acrescentado na frente
        .join(":") // Vai juntar todos os elementos do array numa string colocando o : entre os valores


    return timeString;
}