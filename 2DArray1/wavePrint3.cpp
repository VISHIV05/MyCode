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
    for(int i=0;i<m;i++){
        for(int j=0;j<m;j++){
            if(i<=j){
            int temp= arr[i][j];
            arr[i][j]=arr[j][i];
            arr[j][i]=temp;
           
        }
        }
    }

for(int i=0;i<m;i++){
        
            if(i%2==0){
               for(int j=0;j<n;j++){
                cout<<arr[i][j]<<" ";
               }
            
        }



        else {
            for(int j=n-1;j>=0;j--){
                cout<<arr[i][j]<<" ";
            }
        }
        cout<<endl;
       
    }

}
