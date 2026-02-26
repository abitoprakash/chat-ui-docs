import{j as a}from"./jsx-runtime-9Zi5AnTW.js";import{l as e}from"./index-yS6jhwZ_.js";import{r as h}from"./index-DwAMp0GL.js";import{c as R,a as I}from"./mockHistory-CuxjG-0y.js";import{S as l}from"./SparkleIcon-CIY3MwHb.js";import{C as p}from"./ChatWidget-QaBnOjM_.js";import{C as j,M as q}from"./MessageList-DpJOWcma.js";import{C as H}from"./ChatHeader-DRbm7X9V.js";import{C as O}from"./ChatContainer-CE_3xLUh.js";import{C as z}from"./ChatInput-lk6B8Q17.js";import{D as V}from"./Disclaimer-DAJHJaHe.js";import{S as U}from"./Sidebar-AfqAyT7O.js";import"./index-psvBcutn.js";import"./test-utils-DH_6_3RH.js";import"./tiny-invariant-CopsF_GD.js";import"./clsx-CWrJxR-q.js";import"./createChatEngine-C_-uyuES.js";import"./i18n-CMj5lJeX.js";import"./ChatHistory-D2R5wpO5.js";import"./HistoryItem-PZKH1WuT.js";import"./ChatHistory.module-Cfg-qQMF.js";import"./useChatTranslation-DDuHb0UZ.js";import"./useSessionState-CaAypWQQ.js";import"./AssistantMessage-C15-qYe2.js";import"./MarkdownRenderer-DAtZwI_u.js";import"./markdown-huzLI7hZ.js";import"./CopyButton-D7BXTTna.js";import"./RelatedQueries-CF9Rv8cG.js";import"./SourceList-Dxxlot37.js";import"./AnswerEvents-CeT5N_3v.js";import"./StreamingIndicator-OHAH8iXm.js";import"./Greeting-Bh9E91I8.js";import"./UserMessage-C7r9Ek-j.js";import"./NewChatButton-DxQFp7M_.js";function W(n){const s=[];for(const _ of n.split(`
`)){const t=_.trim();if(!t||t.startsWith(":")||!t.startsWith("data:"))continue;const i=t.slice(5).trim();if(i)try{const f=JSON.parse(i);s.push(f)}catch{}}return s}function o(n){return new Promise(s=>setTimeout(s,n))}function F(n,s={}){const _=s.delay??15,t=s.preGenerationDelay??400,i=s.skipEmptyGenerationChunks??!0,f=s.debug??!1,M=s.historyDelay??800,T=s.sessionMessagesDelay??500,D=s.deleteSessionDelay??300,K=W(n);return{async*sendMessage(y){const{signal:c}=y;let g=!1;for(const d of K){if(c.aborted)return;if(i&&d.type==="generation_data"&&d.data==="")continue;!g&&d.type==="generation_data"&&(g=!0);const m=g?_:t;if(m>0&&await o(m),c.aborted)return;f&&console.log("[ReplayAdapter]",d.type,"data"in d?d.data:""),yield d}},fetchHistory:s.historySessions?async()=>(await o(M),s.historySessions):void 0,fetchSessionMessages:s.sessionMessages?async y=>(await o(T),s.sessionMessages[y]??[]):void 0,deleteSession:s.historySessions?async()=>{await o(D)}:void 0}}const $=`data: {"type": "query_validation_start", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_length_validation_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_length_validation_complete", "data": {"valid": true, "token_count": 5}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_secondary_llm_check_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_secondary_llm_check_complete", "data": {"is_ready": false}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_language_detection_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_language_detection_complete", "data": {"detected_language": "ENGLISH", "language_code": "en", "is_reliable": true, "used_llm_fallback": false}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_language_validation_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_language_validation_complete", "data": {"is_supported": true, "detected_language": "ENGLISH", "supported_languages_count": 10}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_translation_complete", "data": {"source_language": "ENGLISH", "was_translated": false}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_translation_language_extraction_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_translation_language_extraction_complete", "data": {"translation_language_found": false, "translation_language": null, "reasoning": "We need to see if language requested. No language mentioned. So output [].\\n\\n"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_translation_language_validation_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_translation_language_validation_complete", "data": {"has_translation_request": false}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_safety_check_start", "data": {"total_batches": 1}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_safety_check_batch_start", "data": {"batch_index": 1, "total_batches": 1, "progress_percent": 0}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_safety_check_batch_complete", "data": {"batch_index": 1, "total_batches": 1, "is_safe": true, "progress_percent": 100}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_safety_check_complete", "data": {"is_safe": true, "batches_checked": 1}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "query_validation_complete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_start", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_follow_up_check_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_rephrase_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_rephrase_analysis_complete", "data": {"needs_rephrasing": false, "reasoning": "The query is clear. So COMPLETE."}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_split_query_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_split_query_complete", "data": {"post_split_count": 1, "queries": ["How to delete a cluster"], "is_split_query": false, "reasoning": "We need to split the query. The user query: \\"How to delete a cluster\\". It's a single question. So output array with that string. Preserve wording. Probably \\"How to delete a cluster\\". Return JSON array."}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_query_analysis_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_query_analysis_complete", "data": {"keywords": ["cluster"], "intent": null, "must_have_names": null, "must_not_include_names": null, "negative_action_word_forms": null, "excluded_hardware_versions": [], "sub_jira_filter": [], "id_search_terms": [], "category": "", "acronyms": null, "detected_language": null, "is_non_regular_intent": false}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_rerank_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_rerank_complete", "data": {"reasoning": "We need rank relevance to \\"How to delete a cluster?\\" Most docs about NKP delete cluster are relevant. Document 11 is unrelated (MST). So lowest. Others 12,15 similar. Provide order most detailed first. Likely..."}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_context_formulation_start", "data": {}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_context_formulation_complete", "data": {"doc_count": 12}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Nutanix-Kubernetes-Platform-v2_13:top-vcd-cloud-delete-clust-c.html", "title": "Cloud Director Delete a Cluster 2.13 Nutanix Kubernetes Platform v2_13 top vcd cloud delete clust c.html", "visibility": "Public", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_13:top-vcd-cloud-delete-clust-c.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Nutanix-Kubernetes-Platform-v2_13:top-delete-azure-cluster-t.html", "title": "Deleting an Azure Cluster 2.13 Nutanix Kubernetes Platform v2_13 top delete azure cluster t.html", "visibility": "Public", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_13:top-delete-azure-cluster-t.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Nutanix-Kubernetes-Platform-v2_13:top-delete-vsphere-cluster-t.html", "title": "Deleting a vSphere Cluster 2.13 Nutanix Kubernetes Platform v2_13 top delete vsphere cluster t.html", "visibility": "Public", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_13:top-delete-vsphere-cluster-t.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Nutanix-Kubernetes-Platform-v2_13:top-aks-delete-cluster-t.html", "title": "Deleting the Workload Cluster 2.13 Nutanix Kubernetes Platform v2_13 top aks delete cluster t.html", "visibility": "Public", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_13:top-aks-delete-cluster-t.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Nutanix-Clusters-AWS:aws-clusters-aws-cluster-create-t.html", "title": "Creating a Cluster Hosted Nutanix Clusters AWS aws clusters aws cluster create t.html", "visibility": "Public", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Clusters-AWS:aws-clusters-aws-cluster-create-t.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Sizer-User-Guide:top-sizer-cluster-template-delete-t.html", "title": "Deleting a Cluster Template 1.0 Sizer User Guide top sizer cluster template delete t.html", "visibility": "Partner", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Sizer-User-Guide:top-sizer-cluster-template-delete-t.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Nutanix-Kubernetes-Platform-v2_13:top-delete-nkp-cluster-t.html", "title": "Delete a NKP Cluster with One Command 2.13 Nutanix Kubernetes Platform v2_13 top delete nkp cluster t.html", "visibility": "Public", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_13:top-delete-nkp-cluster-t.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Nutanix-Kubernetes-Platform-v2_13:top-vcd-cloud-delete-workload-cluster-t.html", "title": "Deleting the Workload Cluster 2.13 Nutanix Kubernetes Platform v2_13 top vcd cloud delete workload cluster t.html", "visibility": "Public", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_13:top-vcd-cloud-delete-workload-cluster-t.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "case-01812619", "title": "How to delete file server in cluster", "visibility": "Internal", "sfdc_link": "", "link": "https://portal.nutanix.com/page/smart-support/case/details?id=500VO00000JgmjgYAB", "category": "case"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "case-01727186", "title": "Assistance needed to delete Files cluster", "visibility": "Internal", "sfdc_link": "", "link": "https://portal.nutanix.com/page/smart-support/case/details?id=500VO00000Al06sYAB", "category": "case"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "Nutanix-Kubernetes-Platform-v2_13:top-aks-delete-c.html", "title": "Delete an AKS Cluster 2.13 Nutanix Kubernetes Platform v2_13 top aks delete c.html", "visibility": "Public", "sfdc_link": "", "link": "https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Kubernetes-Platform-v2_13:top-aks-delete-c.html", "category": "document"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_data", "data": {"id": "ONCALL-14599", "title": "Tirerack.com -- Customer deleted Objects cluster using mspctl cluster delete command; need manual cleanup", "visibility": "Internal", "sfdc_link": "", "link": "https://jira.nutanix.com/browse/ONCALL-14599", "category": "jira"}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "retrieval_complete", "data": {"metadata": {"is_doc_listing": null, "warning_dialogue": null, "context_exceeding_msg": null, "category": "", "re_phrased_query": "How to delete a cluster", "corrected_query": "", "ret_flag": null, "response_time": 18.197392225265503, "is_file_upload_related": null, "uploaded_files": null}}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "How", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Nut", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "an", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "The", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " exact", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " steps", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " depend", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " on", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " whether", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "it", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " runs", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " its", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " own", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " API", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " controllers", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " or", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " controllers", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " run", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " in", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " separate", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " management", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " All", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " supported", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " platforms", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Sphere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Azure", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Director", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " etc", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".)", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " follow", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " same", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " overall", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " flow", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "---\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "###", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "1", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Determine", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " type", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "If", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**,", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " it", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cannot", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " itself", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " You", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " must", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " first", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " move", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " API", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "C", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "API", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " resources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " it", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " before", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " can", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " be", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " removed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "If", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**,", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " you", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " can", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " it", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " directly", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "(", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Reference", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u201c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "The", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " steps", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " are", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " determined", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " by", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " whether", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " your", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".\\u201d", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cd", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cl", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ust", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "---\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "###", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " only", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bash", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "#", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Refresh", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " credentials", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " if", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " needed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " update", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " credentials", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " <", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "provider", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ">", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " $", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "HOME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "#", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " that", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " will", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " host", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " C", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "API", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " controllers", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " $", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "HOME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "with", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "<", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "provider", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ">-", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "credentials", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=true", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "The", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " command", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " uses", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " explicit", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " kube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " paths", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " avoid", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " mixing", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " contexts", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "(", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Reference", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u201c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u201d", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "azure", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Sphere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " equivalent", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "vs", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "phere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "---\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "###", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "3", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Move", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " C", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "API", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " resources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "pivot", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bash", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " move", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "i", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-res", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "from", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "conf", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "from", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-context", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}-", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "admin", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "@", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " $", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "HOME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-context", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " kind", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-kon", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "voy", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "api", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "per", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "This", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " transfers", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " API", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " custom", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "resource", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " objects", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Control", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Plane", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Machine", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Deploy", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ments", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " etc", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".)", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " from", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "(", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Reference", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u201c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Move", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " API", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " objects", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " from", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " move", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "i", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-res", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u201d", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "azure", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Sphere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " version", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "vs", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "phere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "---\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "###", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "4", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Verify", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ready", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " for", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " deletion", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bash", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " describe", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " $", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "HOME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " -", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "You", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " can", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " also", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " wait", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " for", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " control", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "plane", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " become", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ready", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bash", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kub", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ectl", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " $", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "HOME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " wait", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "for", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "condition", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "control", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "plan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ady", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\"", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "clusters", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/\${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}\\"", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "timeout", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "20", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "m", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "(", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Reference", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u201c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Use", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " life", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cycle", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " services", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " on", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " check", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2019s", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " status", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " describe", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u201d", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "azure", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "---\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "###", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "5", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "work", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "load", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bash", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "#", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " List", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " clusters", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " confirm", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " name", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "namespace", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kub", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ectl", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " get", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " clusters", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "#", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Kubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-name", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=\${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " $", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "HOME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "During", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " deletion", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " automatically", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " removes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " all", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Services", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " of", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " type", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Load", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Balancer", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "e", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".g", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".,", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Azure", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Load", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Bal", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ancers", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Sphere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Classic", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " EL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Bs", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " To", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " keep", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " those", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " services", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " you", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " can", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " add", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "--", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-res", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=false", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "(", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Reference", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u201c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Use", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " nk", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "p", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " with", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u201d", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cd", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "work", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "load", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "];", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " also", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " see", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Azure", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Sphere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " docs", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " for", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " same", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " command", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "--", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-res", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " flag", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ">", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Important", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Persistent", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Vol", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "umes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Vs", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " are", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "not", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " deleted", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " automatically", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ";", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " you", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " must", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " them", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " manually", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " if", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " you", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " no", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " longer", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " need", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " data", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "(", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Reference", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u201c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Persistent", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Vol", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "umes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Vs", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " are", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " not", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " deleted", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " automatically", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " you", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " must", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " PV", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "s", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " manually", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".\\u201d", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cd", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "work", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "load", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " single", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "command", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " guide", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "---\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "###", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "6", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " only", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bash", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " $", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "HOME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "/config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "After", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " gone", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " temporary", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " no", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " longer", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " needed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "(", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Reference", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u201c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u201d", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "azure", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Sphere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " version", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "vs", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "phere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "---\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "###", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "7", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " One", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "command", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " alternative", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "any", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "If", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " you", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " prefer", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " single", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " CLI", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " line", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " is", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**,", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " you", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " can", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " let", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " handle", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " creation", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " pivot", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " deletion", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cleanup", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " automatically", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "bash", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "export", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "your", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-cl", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "uster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-name", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-name", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=\${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\\\\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "   ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=\${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "conf", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "The", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "--", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " flag", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " tells", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " to", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " a", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " local", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " move", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " resources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ",", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " and", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " finally", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".*", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "  \\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "(", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Reference", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u201c", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-name", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=\${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "k", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ube", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "config", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "=\${", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "CL", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "USTER", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_NAME", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "}.", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "conf", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u201d", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u202f", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "[N", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "utan", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "K", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ubernetes", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Platform", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "_", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "13", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ":", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "top", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "t", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".html", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "]", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ").\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "---\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "##", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Summary", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " of", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workflow", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Step", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "------", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "----------------", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "----------------", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "------", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "1", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Identify", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " type", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Skip", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " creation", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "2", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "if", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " needed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " create", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "3", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Pivot", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " C", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "API", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " resources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " move", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "i", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-res", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ources", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "4", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Verify", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " readiness", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Optional", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kub", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ectl", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " wait", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "5", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " workload", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Same", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " command", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "run", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " after", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " pivot", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ")", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "6", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2013", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "kp", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " bootstrap", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "|", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " ", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "7", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " One", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\\u2011", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "liner", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " (", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "no", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "--", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`)", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "NK", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "P", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " delete", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cluster", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " \\u2026", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " --", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "self", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "-managed", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "\`", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " |\\n\\n", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Follow", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " above", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " steps", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " for", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "v", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Sphere", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**,", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Azure", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**,", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " **", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "Cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Director", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "**,", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " or", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " any", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " other", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " supported", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " cloud", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " provider", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " All", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " commands", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " shown", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " are", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " taken", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " directly", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " from", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " the", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " official", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " Nut", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "an", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "ix", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": " documentation", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": ".", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_data", "data": "<<end_of_response>>", "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

data: {"type": "generation_complete", "data": {"disclaimer_note": "NXpert is experimental. Do not share with customers unless you have confirmed accuracy and removed internally sensitive information.", "similar_kbs_link_text": null, "response_time": 32.14678692817688, "is_kb_creation_related": false, "similar_kbs_link_arr": []}, "user_session_id": "session_1771179848501_489068f5-59e3-4722-aa47-49063bda2b6b"}

`;function A(){return R({debug:!0,delay:300,answerText:`To configure storage on your Nutanix cluster, navigate to **Prism Central > Storage > Containers**. You can create a new storage container or modify existing ones. Key settings include:

1. **Replication Factor** — Set RF2 or RF3 depending on fault tolerance requirements
2. **Compression** — Enable inline or post-process compression
3. **Deduplication** — Enable for VDI workloads

For more details, see the [Storage Best Practices Guide](https://portal.nutanix.com/storage).`,sources:[{id:"s1",title:"Storage Best Practices Guide",link:"https://portal.nutanix.com/kb/1",category:"kb_article",visibility:"public"},{id:"s2",title:"Prism Central Admin Guide",link:"https://portal.nutanix.com/kb/2",category:"documentation",visibility:"public"},{id:"s3",title:"AOS Release Notes",link:"https://portal.nutanix.com/kb/3",category:"kb_article",visibility:"public"}],relatedQueries:["What are the recommended replication factor settings?","How to enable compression on a storage container?","What is the difference between RF2 and RF3?"],sessionMessages:I,sessionMessagesDelay:600})}function L({children:n}){return a.jsxs(e.FlexLayout,{flexDirection:"column",style:{height:"100vh",width:"100%"},itemGap:"none",children:[a.jsx(e.NavBarLayout,{layout:e.NavBarLayout.NavBarLayoutTypes.CENTER,title:a.jsx(e.FlexLayout,{alignItems:"center",itemSpacing:"10px",children:a.jsx(e.Title,{size:e.Title.TitleSizes.H4,children:"Support & Insights"})}),accountActions:a.jsx(e.Button,{type:e.Button.ButtonTypes.SECONDARY,children:a.jsxs(e.FlexLayout,{alignItems:"center",itemSpacing:"5px",children:[a.jsx(l,{size:12,color:"#ffffff"}),a.jsx(e.TextLabel,{children:"Ask NIVA"})]})}),accountInfo:a.jsx(e.TextLabel,{type:e.TextLabel.TEXT_LABEL_TYPE.SECONDARY,children:"User"})}),a.jsx(e.FlexLayout,{style:{flex:1,minHeight:0},children:n})]})}const Ea={title:"Widgets/ChatWidget",component:p,parameters:{layout:"fullscreen",docs:{description:{component:"Unified chat widget — single entry point for all React chat UI usage. Supports fullscreen, compact (chat), and inline modes. Without children: renders a preset layout. With children: renders your custom layout with all hooks available."}}}},b={name:"Fullscreen Mode",render:()=>a.jsx(L,{children:a.jsx(p,{adapter:F($,{delay:15,debug:!0,sessionMessages:I,sessionMessagesDelay:600}),mode:"fullscreen",translationParams:{userName:", Joseph"},features:{greeting:{show:!0,avatar:a.jsx(l,{size:40,color:"#2a60e4"}),learnMoreUrl:"https://www.nutanix.com/niva"}},translations:{"header.title":"NIVA","greeting.title":"Hi{{userName}}!","greeting.subtitle":"I'm NIVA, your Nutanix Intelligent Virtual Assistant. I can help you troubleshoot issues, explore Nutanix solutions, and answer your questions in seconds. How can I help you today?","greeting.learnMoreText":"Learn more about NIVA","disclaimer.text":"Niva can make mistakes, so double-check it. Click here for Privacy statement"},onChatEvent:n=>{console.log("[ChatEvent]",n.type,n.payload)},onClose:()=>alert("Close clicked — navigate away from chat")})})},r={name:"Inline Mode",render:()=>a.jsxs(e.StackingLayout,{padding:"40px",style:{maxWidth:900,margin:"0 auto",minHeight:"100vh",backgroundColor:"var(--color-background-base, #ffffff)"},children:[a.jsx(e.Title,{size:e.Title.TitleSizes.H3,children:"Search Results"}),a.jsx(e.Divider,{}),a.jsx(p,{adapter:A(),mode:"inline",initialQuestion:"How do I configure storage on a Nutanix cluster?",features:{relatedQueries:{show:!0},sources:{show:!0,maxCount:5}},onChatEvent:n=>{console.log("[ChatEvent]",n.type,n.payload),n.type===j.SOURCE_CLICKED&&console.log("Source clicked:",n.payload.source)},onFollowUp:(n,s)=>{console.log("Follow-up:",{sessionId:n,query:s}),alert(`Navigate to fullscreen chat
sessionId: ${n}
query: "${s}"`)}}),a.jsx(e.Divider,{}),a.jsx(e.TextLabel,{type:e.TextLabel.TEXT_LABEL_TYPE.SECONDARY,children:"Other search results would appear here..."})]})};function G(){const[n,s]=h.useState(!0),_=h.useCallback(()=>s(t=>!t),[]);return a.jsxs(e.FlexLayout,{itemGap:"none",flexDirection:"column",style:{width:"100%",height:"100%"},children:[a.jsx(H,{showSidebarToggle:!0,isSidebarExpanded:n,onSidebarToggle:_,onClose:()=>alert("Close clicked")}),a.jsxs(e.FlexLayout,{itemGap:"none",style:{flex:1,minHeight:0},children:[a.jsx(e.FlexLayout,{flexDirection:"column",style:{flex:1,minWidth:0},children:a.jsx(O,{mode:"fullscreen",children:a.jsxs(e.StackingLayout,{style:{display:"flex",flexDirection:"column",height:"100%"},children:[a.jsx(e.StackingLayout,{style:{flex:1,overflow:"auto"},children:a.jsx(q,{showGreeting:!0,greetingProps:{avatar:a.jsx(l,{size:40,color:"#2a60e4"}),learnMoreUrl:"https://www.nutanix.com/niva"}})}),a.jsx(e.StackingLayout,{"data-padding":"10px-20px",children:a.jsx(z,{mode:"fullscreen"})}),a.jsx(e.StackingLayout,{"data-padding":"5px-20px",children:a.jsx(V,{})})]})})}),a.jsx("div",{style:{borderLeft:"1px solid #d5dae0"},children:a.jsx(U,{isExpanded:n})})]})]})}const u={name:"Custom Layout",render:()=>a.jsx(L,{children:a.jsx(p,{adapter:A(),translations:{"header.title":"NIVA","greeting.title":"Hi, Joseph!","greeting.subtitle":"I'm NIVA, your virtual assistant. How can I help you today?","greeting.learnMoreText":"Learn more about NIVA","disclaimer.text":"NIVA can make mistakes, so double-check it."},children:a.jsx(G,{})})})};var v,x,k;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Fullscreen Mode',
  render: () => <AppShell>
      <ChatWidget adapter={createReplayAdapter(sseResponseRaw, {
      delay: 15,
      debug: true,
      // Omit historySessions so new questions appear at top of sidebar (story-only fix)
      sessionMessages: MOCK_SESSION_MESSAGES,
      sessionMessagesDelay: 600
    })} mode="fullscreen" translationParams={{
      userName: ', Joseph'
    }} features={{
      greeting: {
        show: true,
        avatar: <SparkleIcon size={40} color="#2a60e4" />,
        learnMoreUrl: 'https://www.nutanix.com/niva'
      }
    }} translations={{
      'header.title': 'NIVA',
      'greeting.title': 'Hi{{userName}}!',
      'greeting.subtitle': "I'm NIVA, your Nutanix Intelligent Virtual Assistant. " + 'I can help you troubleshoot issues, explore Nutanix solutions, ' + 'and answer your questions in seconds. How can I help you today?',
      'greeting.learnMoreText': 'Learn more about NIVA',
      'disclaimer.text': 'Niva can make mistakes, so double-check it. Click here for Privacy statement'
    }} onChatEvent={event => {
      // eslint-disable-next-line no-console
      console.log('[ChatEvent]', event.type, event.payload);
    }} onClose={() => alert('Close clicked — navigate away from chat')} />
    </AppShell>
}`,...(k=(x=b.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,C,N;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Inline Mode',
  render: () => <StackingLayout padding="40px" style={{
    maxWidth: 900,
    margin: '0 auto',
    minHeight: '100vh',
    backgroundColor: 'var(--color-background-base, #ffffff)'
  }}>
      <Title size={Title.TitleSizes.H3}>Search Results</Title>
      <Divider />
      <ChatWidget adapter={createDefaultMockAdapter()} mode="inline" initialQuestion="How do I configure storage on a Nutanix cluster?" features={{
      relatedQueries: {
        show: true
      },
      sources: {
        show: true,
        maxCount: 5
      }
    }} onChatEvent={event => {
      // eslint-disable-next-line no-console
      console.log('[ChatEvent]', event.type, event.payload);
      if (event.type === ChatEvents.SOURCE_CLICKED) {
        // eslint-disable-next-line no-console
        console.log('Source clicked:', event.payload.source);
      }
    }} onFollowUp={(sessionId, query) => {
      // eslint-disable-next-line no-console
      console.log('Follow-up:', {
        sessionId,
        query
      });
      alert(\`Navigate to fullscreen chat\\nsessionId: \${sessionId}\\nquery: "\${query}"\`);
    }} />
      <Divider />
      <TextLabel type={TextLabel.TEXT_LABEL_TYPE.SECONDARY}>
        Other search results would appear here...
      </TextLabel>
    </StackingLayout>
}`,...(N=(C=r.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var w,P,E;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Custom Layout',
  render: () => <AppShell>
      <ChatWidget adapter={createDefaultMockAdapter()} translations={{
      'header.title': 'NIVA',
      'greeting.title': 'Hi, Joseph!',
      'greeting.subtitle': "I'm NIVA, your virtual assistant. How can I help you today?",
      'greeting.learnMoreText': 'Learn more about NIVA',
      'disclaimer.text': 'NIVA can make mistakes, so double-check it.'
    }}>
        <SidebarRightLayout />
      </ChatWidget>
    </AppShell>
}`,...(E=(P=u.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const Ia=["FullscreenMode","InlineMode","CustomChildrenLayout"];export{u as CustomChildrenLayout,b as FullscreenMode,r as InlineMode,Ia as __namedExportsOrder,Ea as default};
