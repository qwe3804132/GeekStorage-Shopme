/**
 * 
 */

$(document).ready(function() {



	$("a[name='linkRemoveDetail']").each(function(index) {
		$(this).click(function() {
			removeDetailSectionByIndex(index)
		})



	});


})



function addNextDetailSection() {
	allDivDetails = $("[id^='divDetail']");   //elements who start with given value
	divDetailsCount = allDivDetails.length;

	nextDivDetailId = divDetailsCount;

	htmlDetailSection = `
	<div class="form-inline" id="divDetail${divDetailsCount}">
			<label class="m-3">Name:</label>
			<input type="text" class="form-control w-25" name="detailNames"
				maxlength="255"></input>
			<label class="m-3">Value:</label>
			<input type="text" class="form-control w-25" name="detailValues"
				maxlength="255"></input>
		</div>

	`;

	$("#divProductDetails").append(htmlDetailSection);
	previousDivDetailSection = allDivDetails.last();
	previousDivDetailsID = previousDivDetailSection.attr("id");
	htmlLinkRemove = `
	<a  class="btn fas fa-times-circle fa-2x icon-dark " 
	href="javascript:removeDetailSectionById('${previousDivDetailsID}')"
	title="Remove this detail"></a>
	`;
	previousDivDetailSection.append(htmlLinkRemove);
	$("input[name='detailNames']").last().focus();
}

function removeDetailSectionById(id) {

	$("#" + id).remove();
}

function removeDetailSectionByIndex(index) {
	$("#divDetail"+index).remove();

}