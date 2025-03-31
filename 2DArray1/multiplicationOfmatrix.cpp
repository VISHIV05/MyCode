#include<iostream>
using namespace std;
int main(){
    int m;
    cout<<"enter the number of rows in first matrix";
    cin>>m;
    int n;
    cout<<"enter the number of columns in first matrix";
    cin>>n;
     int p;
    cout<<"enter the number of rows in second matrix";
    cin>>p;
      int q;
    cout<<"enter the number of columns in second matrix";
    cin>>q;

cout<<"enter the elements of first array";
    if(n==p){
    int arr[m][n];
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }

    cout<<"enter the elements of second array";
    int brr[p][q];
    for(int i=0;i<p;i++){
        for(int j=0;j<q;j++){
            cin>>arr[i][j];
        }
    }
    int res[m][q];
    for(int i=0;i<m;i++){
         for(int j=0;j<q;j++){
            res[i][j]=0;
            for(int k=0;k<p;k++){
                res[i][j]+= arr[i][k]*brr[k][j];
            }

         }
    }
    cout<<endl;

for(int i=0;i<m;i++){
         for(int j=0;j<q;j++){
            cout<<res[i][j]<<" ";
           
         }
          cout<<endl;
    }
   

    }
    else{
        cout<<"the matrices can not be multiplied";
    }
    
}