---
repo: "honestbank/kp"
name: "kp"
description: "Library for handing Kafka messages with retries"
readmeQualityOk: true
url: "https://github.com/honestbank/kp"
homepage: "https://honestbank.github.io/kp"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["backoff", "golang", "kafka", "retries", "deadletters", "backend", "workspace-code-infrastructure-prod", "hacktoberfest"]
stars: 6
forks: 2
openIssues: 4
closedIssues: 19
watchers: 15
contributors: 16
recentReleases: 0
createdAt: "2022-06-24T07:12:08Z"
lastCommitAt: "2026-11-16T04:27:44Z"
lastReleaseAt: "2022-10-29T05:53:55Z"
status: "watched"
tags: ["community_watch"]
healthScore: 88
undervaluedScore: 66
maintainers: ["aikido-autofix[bot]", "honestbank-bot", "koungkub"]
openGraphImageUrl: "https://opengraph.githubassets.com/0153230ff0cfb7746b34eeb9285682bb3cbadc3ea9c0e966160f53e5735a852b/honestbank/kp"
---

# kp
Library for handing Kafka messages with retries

> **v2** (confluent-kafka-go/librdkafka, middleware chain, schema registry) lives in [`v2/`](https://github.com/honestbank/kp/blob/HEAD/v2/README.md). The docs below cover v1 (sarama).

## How it works
Each KP instance create a kafka sarama client which will listen to 2 topics: main topic and retry topic. The Retry
topic will be prepended with the consumer group name such that each instance could have its own retry and dead letter
topics. This will enable a case such that you have two services that listen to the same topic but one service might
fail the topic, with this it would only retry on that service and not the other one.

Code Example: (see [examples](https://github.com/honestbank/kp/tree/main/examples))

```golang
func main() {
	cfg, err := config.LoadConfig()
	if err != nil {
		panic(err)
	}
	retryCount := 10
	consumerGroup := "simple-service" // usually the name of your service
	backoffDuration := time.Second * 1 // set to 0 for no backoff

	processor := kp.NewKafkaProcessor("main-topic", "retry-main-topic", "dead-main-topic", retryCount, consumerGroup, kp.KafkaConfig{KafkaBootstrapServers:…
