document.write()
var i = 0
var choice = "balls"
const arr = []

while (i != 1000) {
    arr.push(choice)
    i = +i + 1
    if (i%32) {
        document.writeln(arr)
        document.writeln("<br>")
    }
}
document.write(arr)
