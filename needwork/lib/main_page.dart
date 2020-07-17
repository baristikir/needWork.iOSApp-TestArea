import 'package:flutter/material.dart';
import 'package:needwork/login_page.dart';

class MainPage extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      body: Column(
        children: <Widget>[
        Expanded(
          child: Container(
            color: Colors.blueGrey,
            child: Center(
              child: Container(
                color: Colors.white,
                height: 140,
                width: 150,
                padding: EdgeInsets.only(left: 16, right:16),
                //child: Image.asset("images/needwork.png", height: 100, width:200),
              ),),
            ),
          ),
          Container(
            color: Colors.white,
            height: 270,
            width: double.infinity,
            child: Container(
              padding: EdgeInsets.only(left: 20, right: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  SizedBox(height: 50,),
                  Padding(
                    padding: EdgeInsets.only(left:20),
                    child: Text("Find your workspace", style: TextStyle(fontSize: 24),),
                  ),
                  SizedBox(height: 30,),
                  Padding(
                    padding: const EdgeInsets.only(left: 20, right:20,),
                    child: GestureDetector(
                      onTap: (){
                        Navigator.push(context, MaterialPageRoute(builder: (context){return LoginPage();}));
                      },
                      child: Row(
                      children: <Widget>[
                        Image.asset("images/flag.jpg", height: 32, width: 32,),
                        Text("+49", style: TextStyle(fontSize: 20),),
                        SizedBox(width: 10,),
                        Text("Enter your mobile number", style: TextStyle(fontSize: 20, color: Colors.grey.shade800))
                      ],
                    ),
                    ),
                  ),
                  SizedBox(height: 30,),
                  Divider(height: 15, color: Colors.grey.shade400,),
                  SizedBox(height:25,),
                  Padding(padding: EdgeInsets.only(
                      left: 20
                    ),
                    child: Text("Or connect with ", style: TextStyle(color: Colors.blue, fontSize: 16),),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }
}