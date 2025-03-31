#include<iostream>
using namespace std;
int main(){
    int  m;
    cout<<"enter the number of rows in a matrix:";
    cin>>m;

    int n;
    cout<<"enter the number of columns in a matrix:";
    cin>>n;
     
     int arr[m][n];
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            cin>>arr[i][j];
        }
    }
    cout<<endl;
   int maxc=n-1;
   int maxr=m-1;
   int minc=0;
   int minr=0;
   int tne=n*m;
   int count=0;
   while(minr<=maxr &&minc<=maxc){
    for(int j=minc;j<=maxc && count<tne;j++){
        cout << arr[minr][j] ;
        count++;
    }
    minr++;
    // if(minc>maxc || minr>maxr) break;
    for(int i=minr;i<=maxr && count<tne;i++){
        cout<<arr[i][maxc];
         count++;
    }
    maxc--;
    // if(minc>maxc || minr>maxr) break;
    for(int j=maxc;j>=minc && count<tne;j--){
        cout<<arr[maxr][j];
         count++;
    }
    maxr--;
    // if(minc>maxc || minr>maxr) break;
    for(int i=maxr;i>=minr && count<tne;i--){
        cout<<arr[i][minc];
         count++;
    }
    minc++;
   }
}