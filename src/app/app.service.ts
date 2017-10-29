import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppRequestService {
    baseURL: any;

    constructor(private http: Http) {
        this.baseURL = 'http://jsonplaceholder.typicode.com';
    }

    public getAllPosts() {
        const rqUrl = this.baseURL + '/posts';
        return this.http.get(rqUrl).map(res => res.json());
    }

    public getPostById(idPost) {
        const rqUrl = this.baseURL + '/posts/' + idPost;
        return this.http.get(rqUrl).map(res => res.json());
    }

    public getAllCommentsOfPost(idPost) {
        const rqUrl = this.baseURL + '/comments?postId=' + idPost;
        return this.http.get(rqUrl).map(res => res.json());
    }

    public getAllAlbums() {
        const rqUrl = this.baseURL + '/albums';
        return this.http.get(rqUrl).map(res => res.json());
    }

    public getAllPhotosOfAlbum(idAlbum) {
        const rqUrl = this.baseURL + '/photos?albumId=' + idAlbum;
        return this.http.get(rqUrl).map(res => res.json());
    }

    public getAllComments() {
        const rqUrl = this.baseURL + '/comments';
        return this.http.get(rqUrl).map(res => res.json());
    }

    public getAllUsers() {
        const rqUrl = this.baseURL + '/users';
        return this.http.get(rqUrl).map(res => res.json());
    }

    public getUserById(idUser) {
        const rqUrl = this.baseURL + '/users/' + idUser;
        return this.http.get(rqUrl).map(res => res.json());
    }
}