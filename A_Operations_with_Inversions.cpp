#include <bits/stdc++.h>
using namespace std;
#define fast_io ios::sync_with_stdio(false); cin.tie(0);
const long long INF=1e18,MOD=1e9+7,inv2=500000004,inv3=333333336;
//if (s.find(check) == string::npos) {
bool isPrime(int n){if(n<2)return false;if(n==2||n==3)return true;if(n%2==0||n%3==0)return false;for(int i=5;i*i<=n;i+=6){if(n%i==0||n%(i+2)==0)return false;}return true;}
int power(int a,int b){int res=1;while(b){if(b&1)res=(res*a)%MOD;a=(a*a)%MOD;b>>=1;}return res;}
int modinv(int a){return power(a,MOD-2);}
 
int main() {
    fast_io;
    int t=1;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int>vec(n);
        for(int i=0;i<n;i++){
          cin>>vec[i];
        }
        int mini=INT_MAX;
        int cnt=0;
        for(int i=n-1;i>=0;i--){
          if(mini>vec[i]){
            mini=vec[i];
            cnt++;
          }
          else {
           // cnt++;
          }

        }
        cout<<cnt<<endl;
    }
    return 0;
}