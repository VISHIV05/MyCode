#include<iostream>
using namespace std;
int main(){
    int m;
    cout<<"enter the order of square matrix:";
   cin>>m;
    int arr[m][m];
    for(int i=0;i<m;i++){
        for(int j=0;j<m;j++){
            cin>>arr[i][j];
        }
    }

     for(int i=0;i<m;i++){
        for(int j=0;j<m;j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
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
        for(int j=0;j<m;j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;


}

}