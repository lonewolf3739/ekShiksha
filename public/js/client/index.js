const topicsList = document.getElementById('topics');
const topicsLink = {
    1 : "/periodic-table",
    2 : "/geometry",
    3 : "/solid-state",
    4 : "/chemical-reactions",
    5 : "/hybridization",
    6 : "/organic-reactions",
};

const getTopicsListener = function() {
    topics = JSON.parse(this.responseText);
    topics.forEach(function(topic) {
        appendNewTopic(topic);
    });
}

const appendNewTopic = function(topic) {
    const head3 = document.createElement('h3');
    const newTopicItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', topicsLink[topic.topic_id]);
    link.innerHTML = topic.topic_name;
    newTopicItem.appendChild(link);
    head3.appendChild(newTopicItem);
    const p = document.createElement('p');
    p.innerHTML = topic.description;
    topicsList.appendChild(head3);
    topicsList.appendChild(p);
}

const topicsRequest = new XMLHttpRequest();
topicsRequest.onload = getTopicsListener;
topicsRequest.open('get', '/topics');
topicsRequest.send();