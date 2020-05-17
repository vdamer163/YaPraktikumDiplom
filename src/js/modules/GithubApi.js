export default class GithubApi {
    constructor() {

        this.url = `https://api.github.com/repos/vdamer163/YaPraktikumDiplom/commits`
        this.req = new Request(this.url);
    }

    getCommits() {
        return fetch(this.req)

            .then(res => res.json())
            .catch(err => {
                throw err;
            });

    }

}