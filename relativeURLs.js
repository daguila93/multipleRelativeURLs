let urls = ['engenharia', 'sites2', 'engenharia.sites2']; //Não colocar protocolo

let tags = ['a', 'img', 'source', 'video', 'link', 'script'];
let attributes = ['href', 'src', 'srcset'];

tags.forEach(tag => document.querySelectorAll(tag).forEach(atributte => turnURLRelative(atributte, urls)));

function turnURLRelative(node, urls) {
  urls.forEach(url => {
    const regex = new RegExp('^https?://' + url + '.uff.br/')
    attributes.forEach(attr => {
      if (node.hasAttribute(attr) && node[attr].match(regex)) {
        let url = new URL(node[attr]);
        node[attr] = node[attr].replaceAll(node[attr].match(regex), '/');
      }
    })
  }
  );
}
