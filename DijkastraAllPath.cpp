#include<iostream>
#include<vector>
#include<list>
#include<queue>
#include<climits>
#include<utility>
using namespace std;


typedef pair<int,int>pii;
vector<int>dijkastra(int v,vector<vector<pii>>&adj,int src,vector<int>&parent){

  vector<int>dist(v,INT_MAX);
  parent.assign(v,-1);
  priority_queue<pii,vector<pii>,greater<pii>>pq;

  dist[src]=0;
  pq.push({0,src});

  while(!pq.empty()){
    int dis=pq.top().first;
    int node=pq.top().second;
    pq.pop();

    for(auto it : adj[node]){
        int adjNode=it.first;
        int edgeWeight=it.second;

        if(dis+edgeWeight<dist[adjNode]){
            dist[adjNode]=dis+edgeWeight;
            pq.push({dist[adjNode],adjNode});
            parent[adjNode]=node;
        }
    }
  }
  return dist;
}

void printPath(int node,const vector<int>&parent){
    if(node==-1) return;
    printPath(parent[node],parent);
    cout<<node<<" ";
}


int main(){
    int v,e,src;
    cin>>v>>e;
    vector<vector<pii>>adj(v);
    vector<int>parent(v);

    
    for(int i=0;i<e;i++){
        int u,v,w;
        cin>>u>>v>>w;
        adj[u].push_back({v,w});
        adj[v].push_back({u,w});
    }

    cin>>src;
    vector<int>dist=dijkastra(v,adj,src,parent);

    for(int i=0;i<v;i++){
        if(dist[i]==INT_MAX) cout<<"Unreachable"<<endl;
        else cout<<i<<" "<<dist[i]<<"Path:";
        printPath(i,parent);
        cout<<endl;
    }
    return 0;
}