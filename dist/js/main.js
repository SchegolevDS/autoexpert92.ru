$(function(){$("#button-1").click(function(){$("#item-1").slideToggle("slow")}),$("#button-2").click(function(){$("#item-2").slideToggle("slow")}),$("#button-3").click(function(){$("#item-3").slideToggle("slow")}),$("#button-4").click(function(){$("#item-4").slideToggle("slow")})}),$(function(){$(window).width()<="992"?$(function(){}):$(function(){var i=0;$("button").click(function(){$("span").toggle(i++%2==0)})})}),$(window).load(windowSize),$(window).resize(windowSize),$(window).on("load resize",windowSize);