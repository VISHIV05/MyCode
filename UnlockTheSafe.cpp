#include <bits/stdc++.h>
using namespace std;

int main() {
	// your code goes here
    int t;
    cin>>t;
    while(t--){
    int n,k;
    cin>>n>>k;
    
    int a[n];
    int b[n];
    for(int i=0;i<n;i++){
        cin>>a[i];
       
    }
    for(int i=0;i<n;i++){
        
        cin>>b[i];
    }
    
    int minSum=0;
    int minDiff=9;
    for(int i=0;i<n;i++){
        int down=(a[i]+9-b[i])%9;
        int up=(b[i]+9-a[i])%9;
        
        minSum+=min(up,down);
        
        
        if (up!=down){
            int diff=abs(up-down);
            
            if(diff<minDiff) minDiff=diff;
            // cout<<minDiff<<endl;

        }
        
    }
 
 
    if(minSum==0 && k==9) cout<<"Yes"<<endl;
    else if(k<minSum) cout<<"No"<<endl;
    else if(k<minSum+minDiff){
        if((k-minSum)%2 ==0) cout<<"Yes"<<endl;
        else cout<<"No"<<endl;
        
    }
    else cout<<"Yes"<<endl;
}
    }
    
    
