import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      body: Stack(
        children: <Widget>[
          Container(
            padding: EdgeInsets.only(left: 20, right: 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                SizedBox(height: 50,),
                GestureDetector(
                  onTap: (){
                    Navigator.pop(context);
                  },
                  child: Icon(Icons.arrow_back),
                ),
                SizedBox(height: 30,),
                Text("Enter your mobile number", style: TextStyle(fontSize: 20),),
                SizedBox(height: 30,),
                Row(children: <Widget>[
                  Image.asset("images/flag.jpg", height: 32, width: 32,),
                  SizedBox(width: 4,),
                  Icon(Icons.keyboard_arrow_down, size: 14, color: Colors.grey.shade500),
                  SizedBox(width: 12,),
                  Text("+49", style: TextStyle(fontSize: 20),),
                  SizedBox(width: 10,),
                  Expanded(
                    child: TextField(
                        autofocus: true,
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                           hintText: "15226745591",
                           hintStyle: TextStyle(fontSize: 18),
                            enabledBorder: UnderlineInputBorder(
                               borderSide: BorderSide(color: Colors.black, width: 1.2)
                              ),
                           focusedBorder: UnderlineInputBorder(
                               borderSide: BorderSide(color: Colors.black, width: 1.2)
                             ),
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
          Align(
            alignment: Alignment.bottomLeft,
            child: Padding(
              padding: EdgeInsets.only(left: 20, right: 20),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text("By conitnuing you may receive an SMS for \nverification.Message and data rates may\apply.", style: TextStyle(height: 1.6),),
                  FloatingActionButton(
                    onPressed: (){},
                    backgroundColor: Colors.black,
                    child: Icon(Icons.arrow_forward, color: Colors.white,),
                  ),
                  SizedBox(height: 200,),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

}