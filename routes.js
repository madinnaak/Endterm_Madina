var url=require('url');
var fs=require('fs');

function renderHTML(path, response){
	fs.readFile(path,null,function(error,data){
		if (error){
			response.writeHead(404);
            response.write('Route not found');
		} else {
			response.write(data);
		}
		return response.end();
	});
}

module.exports = {
    handleRequest:function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
 
        var path = url.parse(request.url).pathname;
        
        switch (path) {
            case '/':
                renderHTML('./index.html', response);
                break;
            case '/about':
                renderHTML('./about.html', response);
                break;
			case '/img/gallery/graduation':
				var img = fs.readFileSync('./img/gallery/graduation.jpg');
				response.writeHead(200, {'Content-Type': 'image/jpg' });
				response.end(img, 'binary');
				break;
			case '/img/gallery/study':
				var img = fs.readFileSync('./img/gallery/study.jpg');
				response.writeHead(200, {'Content-Type': 'image/jpg' });
				response.end(img, 'binary');
				break;	
            default:
                response.writeHead(404);
                response.write('Route not found');
                response.end();
        }
    }
};