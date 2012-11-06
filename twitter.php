<?php
class Twitter {
	public static function getTweets() {
		$url = "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=CalvinHarris";
		$jsonString = file_get_contents($url);
		$arrayOfTweets = json_decode($jsonString);
		return $arrayOfTweets;
	}
}
?>