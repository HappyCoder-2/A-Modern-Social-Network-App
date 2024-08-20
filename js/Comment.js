class Comment {
  post_id = '';
  user_id = '';
  content = '';
  api_url = 'https://65be2a18dcfcce42a6f1f5a1.mockapi.io';

  create() {
    let data = {
      post_id: this.post_id,
      user_id: this.user_id,
      content: this.content
    };
    data = JSON.stringify(data);

    return fetch(this.api_url + '/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data
    })
    .then(response => response.json())
    .then(data => data);
  }

  async get(post_id) {
    const api_url = `${this.api_url}/comments?post_id=${post_id}`;
    
    const response = await fetch(api_url);
    const data = await response.json();
  
    if (Array.isArray(data)) {
      return data; // If it's an array, return as is
    } else {
      return [data]; // If it's an object, wrap it in an array
    }
  }
}