#include<bits/stdc++.h>
using namespace std;

void solve(){
  int n,r,b;
  cin>>n>>r>>b;
//pigeonhole principle
  int p=(r/(b+1));
  int q=(r%(b+1));
  for(int i=0;i<q;i++) cout<<string(p+1,'R')<<'B';
  for(int i=q;i<b;i++) cout<<string(p,'R') << 'B';
  cout<<string(p,'R');
  cout<<endl;
}
int main(){
    int t;
    cin>>t;
    while(t--){
        solve();
    }
}
