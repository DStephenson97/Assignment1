var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Assassins Creed\nBattlefield\nCall of Duty\nFar Cry\nFortnite\nGears of War\nGrand Theft Auto V\nMadden\nPUBG\nRocket League ");
	response.write("\n\n\nI picked my favorite games because it makes sense due to the fact that this is a class for games.")
	response.end();
}).listen(3000);

console.log('Server started');