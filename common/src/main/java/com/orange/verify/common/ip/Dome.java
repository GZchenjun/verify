package com.orange.verify.common.ip;

import java.util.ArrayList;
import java.util.List;

public class Dome {

    public static void main(String[] args){
        List list = new ArrayList();
        list.add("1");
        list.add("b");

        List alist = new ArrayList();
        List blist = new ArrayList();

        if(list != null && list.size() >0){
            for(int i = 0; i < list.size(); i++){
                if(((String)list.get(i)).equals("1")){
                    alist.add(list.get(i));
                }
            }
        }

        String a = "相等";
        String b = "不相等";
        if(alist != null && alist.size() >0){
            for(int j = 0; j < alist.size(); j++){
                for(int k = 0; k < list.size(); k++){
                    if(alist.get(j).equals(alist.get(k))){
                        blist.add(a);
                    }else{
                        blist.add(b);
                    }
                }
            }
        }

        if(blist.contains(b)){
            System.out.println("List里面所有的a都相等不成立");
        }else{
            System.out.println("List里面所有的a都相等成立");
        }
    }
}